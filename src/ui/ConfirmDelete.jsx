import styled from 'styled-components';
import Button from './Button';
import Heading from './Heading';

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading type='h3'>Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variation='secondary'
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation='danger' disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;

/* we were able to bring the onCloseModal prop in this confirm delete component because now it is the child component of the modal window and inside modal component we cloned the element and injected that function there and now it will be created inside this component so we will be able to access it here */

/* when we delete the cabin the modal window instantly closes but nowhere we actually tell it to close afterwards but the reason it closes is because after we delete the cabin the row does no longer exist and so therefore the modal component inside the row also no longer exists so that's why the modal window can no longer be shown so it disappears */
