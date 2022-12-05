import { E2EPage } from '@stencil/core/testing';

export const getTableRows = async (page: E2EPage) => {
  const json = await page.evaluate(() => {
    const rows = [
      // when constructed from data
      ...Array.from(document.querySelector('six-table').shadowRoot.querySelectorAll('six-table-row')),
      // when constructed from a template
      ...Array.from(document.querySelector('six-table').querySelectorAll('six-table-row')),
    ];
    const data = rows.map((row) => Array.from(row.querySelectorAll('six-table-cell')).map((cell) => cell.textContent));
    return JSON.stringify(data);
  });
  return JSON.parse(json);
};
