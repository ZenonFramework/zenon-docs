
module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Setup',
      items: ['setup/server-setup', 'setup/database-import'],
    },
    {
      type: 'category',
      label: 'Jobs',
      items: ['jobs/police', 'jobs/ems'],
    },
    {
      type: 'category',
      label: 'Apps',
      items: ['apps/phone'],
    },
    {
      type: 'category',
      label: 'Exports',
      items: ['exports/inventory'],
    }
  ],
};
