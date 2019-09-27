export const crudOptions = {
  columns: [
    {
      title: '创建时间',
      key: 'createDate',
      type: 'datetime',
      rowSlot: true,
      width: 200
    },
    {
      title: '插槽式',
      key: 'slotExample',
      sortable: true,
      search: {
        disabled: false,
        slot: true
      },
      form: {
        slot: true
      },
      rowSlot: true
    }
  ]
}