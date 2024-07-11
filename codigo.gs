function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function processForm(formData) {
  var sheet = SpreadsheetApp.openById('ID DA PLANILHA').getSheetByName('PAGINA NA PLANILHA');
  var data = [
    formData.data,
    formData.Nome,
    formData.Cpf,
    formData.Telefone1,
    formData.Telefone2,
    formData.Telefone3,
    formData.Negativacao,
    formData.uf,
    formData.Assessor,
    formData.Origem
  ];
  sheet.appendRow(data);
  return 'Dados armazenados com sucesso!';
}
