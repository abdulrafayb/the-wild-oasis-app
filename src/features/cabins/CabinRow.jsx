import styled from 'styled-components';
import { HiPencil, HiTrash, HiSquare2Stack } from 'react-icons/hi2';

import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';
import { useDeleteCabin } from './useDeleteCabin';
import { formatCurrency } from '../../utils/helpers';
import { useCreateCabin } from './useCreateCabin';
import ConfirmDelete from '../../ui/ConfirmDelete';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    });
  }

  return (
    <TableRow role='row'>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}

      <div>
        <button onClick={handleDuplicate} disabled={isCreating}>
          <HiSquare2Stack />
        </button>

        <Modal>
          <Modal.Open opens='edit'>
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name='edit'>
            <CreateCabinForm cabinToUpdate={cabin} />
          </Modal.Window>

          <Modal.Open>
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window>
            <ConfirmDelete
              resourceName='cabins'
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </TableRow>
  );
}

export default CabinRow;

/* and we also use react query to actually make the delete button work and we do that by doing mutations */

/* now as we delete we see that the ui don't even update and to make that happen we need to invalidate the cache as soon as the mutation is done so for that we can specify the onSuccess callback which accepts a function so in it we can tell react query what to do as soon as the mutation was successful so we basically want to refetch the data */

/* now the way it works in react query is by invalidating the cache because the data then becomes invalid so react query fetches the data again and to do that we need to get the queryClient and then call invalidateQueries function in there so to get the access to our queryClient instance in this component we have a special hook called useQueryClient */

/* in our invalidateQueries function we have to tell it which exact query meaning which exact data should be invalidated so we specify exactly the same queryKey that brings us the cabins data */

/* and this is one of the reasons why it is so important that each query is uniquely identified because then we can now invalidate this query so that it will fetch again */

/* and besides the onSuccess handler we also have the onError handler so it receives the error that was actually thrown inside the deleteCabin function as that is the function we pass in the mutation function */
