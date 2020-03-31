'use strict';

$(document).ready(function () {
    let zooArr = [];
    
    const readJson = () => {
    $.ajax('./data/page-1.json').then(data => {
        data.forEach(animal => {
            let ZooObj = new Zoo(animal);
            // console.log(ZooObj);
            ZooObj.render();
        });
        renderList();
        fillterByKeyword();

    });
    };
     readJson(); 
  
    function Zoo(ZooObj) {
        this.image_url = ZooObj.image_url;
        this.title = ZooObj.title;
        this.description = ZooObj.description;
        this.keyword = ZooObj.keyword;
        this.horns = ZooObj.horns;
        zooArr.push(this);
    }


    function renderList() {

        let arrKeywords = [];
        zooArr.forEach(val => {
            if (!arrKeywords.includes(val.keyword)) {
                arrKeywords.push(val.keyword);
            }
        });
    
        arrKeywords.forEach((val) => {
            $('#cataloge').append(`<option value="${val}"> ${val} </option>`);
    
        });
    }
    
//    Zoo.prototype.render=function(){
//     let $callAnimal = $('.photo-template').html();
//      var renderIt= Mustache.render($callAnimal , this);
//      $('main').append(renderIt);
// }
     
    Zoo.prototype.render = function () {
        let $callAnimal = $('.photo-template').clone();
        $callAnimal.removeAttr('class');
        $callAnimal.find('h2').text(this.title);
        $callAnimal.find('img').attr('src', this.image_url);
        $callAnimal.find('p').text(this.description);
        $callAnimal.attr('class', this.keyword);
        $('main').append($callAnimal);
     
    }    

    function fillterByKeyword() {
        $('select').on('change', function () {
            $('section').hide();
            let selected = $(this).val();
            console.log(selected);
            $(`.${selected}`).fadeIn();
          
        })
    }


    
});


