beforeEach(() => {
  document.body.innerHTML = `
    <select id="lenghtLeft"></select>
    <select id="lenghtRight"></select>
    <input id="cLenghtInputFrom" />
    <div id="conversion-result-title"></div>
    <div id="conversion-result"></div>
  `;
});

test('fake DOM loads without crash', () => {
  // Now import AFTER the DOM is set up
  require('../backend/scripts/ConversionCalculator');
  // Add your test logic here
});
