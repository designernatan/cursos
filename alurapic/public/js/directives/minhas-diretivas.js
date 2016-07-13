angular.module('minhasDiretivas', [])

  .directive('meuPainel', function() {
    var ddo = {};
    ddo.transclude = true
  
    ddo.restrict = "AE";
  
    ddo.scope = {
      titulo: '@titulo'
    }
    
    ddo.templateUrl = 'js/directives/meu-painel.html'
    return ddo
  })
  
  .directive('minhaFoto', function() {
    var ddo = {};
//    ddo.transclude = false;
  
    ddo.restrict = "E";
  
    ddo.scope = {
      titulo: '@titulo', // pode ser soh com o @, o angular da um jeito se for igual no template
      url: '@url'
    }
    
    ddo.templateUrl = 'js/directives/minha-foto.html'
    return ddo

    
  });
