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
  
    ddo.restrict = "AE";
  
    ddo.scope = {
      titulo: '@titulo',
      url: '@url'
    }
    
    ddo.templateUrl = 'js/directives/minha-foto.html'
    return ddo

    
  });
