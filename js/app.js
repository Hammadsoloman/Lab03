'use strict';

$(document).ready(function () {
    function Zoo(ZooObj) {
        this.image_url = ZooObj.image_url;
        this.title = ZooObj.title;
        this.description = ZooObj.description;
        this.keyword = ZooObj.keyword;
        this.horns = ZooObj.horns;
        Zoo.all.push(this);
    }
     Zoo.all = [];

     
      Zoo.prototype.render=function(){
           let $callAnimal = $('#photo-template').html();
            var renderIt= Mustache.render($callAnimal , this);
            $('main').append(renderIt);
      }
  

    Zoo.prototype.renderList = function () {
      let $animalOption = $('<option></option>').text(this.title);
      $animalOption.attr('value',this.keyword)
      $('select').append($animalOption);   
  }
    
    const readJson = () => {
        $.ajax('data/page-1.json', { method: 'GET', dataType: 'JSON' }).then(data => {
            data.forEach(animal => {
                let ZooObj = new Zoo(animal);
                ZooObj.render();
                ZooObj.renderList();
            });
        });
    };
    readJson();
});