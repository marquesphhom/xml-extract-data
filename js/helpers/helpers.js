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
      fone: 'telefone',
      cProd: 'codigo_produto',
      cEAN: 'codigo_ean',
      xProd: 'produto',
    }

    this.destinatario = ['dest', 'enderDest']
    this.emitente = ['emit', 'enderEmit']
    
    this.dados = {
      'dest': ['CNPJ', 'xNome', 'xFant', 'IE', 'IM', 'CNAE', 'email', 'xLgr', 'nro', 'xCpl', 'xBairro', 'cMun', 'xMun', 'UF', 'CEP', 'cPais', 'xPais', 'fone'],
      'emit': ['CNPJ', 'xNome', 'xFant', 'IE', 'IM', 'CNAE', 'email', 'xLgr', 'nro', 'xCpl', 'xBairro', 'cMun', 'xMun', 'UF', 'CEP', 'cPais', 'xPais', 'fone'],
      'prod': ['cProd','cEAN','xProd'],
      }

      this.dest = ['CNPJ', 'xNome', 'xFant', 'IE', 'IM', 'CNAE', 'email', 'xLgr', 'nro', 'xCpl', 'xBairro', 'cMun', 'xMun', 'UF', 'CEP', 'cPais', 'xPais', 'fone']
  }

  keys(){
    return this.dbKeys
  }
 
}