import Filter from '../../ui/Filter';
import TableOperations from '../../ui/TableOperations';

function CabinTableOperations() {
  return (
    <TableOperations>
      {/* We could do these two as compound components as well, but let's keep it simple, and let's also explore different ways of achieving the same thing */}
      <Filter
        filterField='discount'
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
