export class Helpers {
  constructor() {
    this.dbKeys = {
      CNPJ: 'inscricao_juridica',
      xNome: 'razao_social',
      xFant: 'nome_fantasia',
      IE: 'inscricao_estadual',
      IM: 'inscricao_municipal',
      CNAE: 'cnae',
      email: 'email',
      xLgr: 'logradouro',
      nro: 'numero', 
      xCpl: 'complemento',
      xBairro: 'bairro', 
      cMun: 'municipio', 
      xMun: 'descricao_municipio', 
      UF: 'uf', 
      CEP: 'cep', 
      cPais: 'pais', 
      xPais: 'descricao_pais', 
      fone: 'telefone'
    }

    this.dados = {
      'dest': ['CNPJ', 'xNome', 'xFant', 'IE', 'IM', 'CNAE', 'email'],
      'enderDest': ['xLgr', 'nro', 'xCpl', 'xBairro', 'cMun', 'xMun', 'UF', 'CEP', 'cPais', 'xPais', 'fone'],
      }
  }

  keys(){
    return this.dbKeys
  }
 
  getDados(){
    return this.dados
  }
}