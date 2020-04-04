// 'use strict';

// $(document).ready(function () {
//     Zoo.all = [];
    
 
  
//     function Zoo(ZooObj) {
//         this.image_url = ZooObj.image_url;
//         this.title = ZooObj.title;
//         this.description = ZooObj.description;
//         this.keyword = ZooObj.keyword;
//         this.horns = ZooObj.horns;
//         Zoo.all.push(this);
//     }


//     // function renderList() {

//     //     let arrKeywords = [];
//     //     zooArr.forEach(val => {
//     //         if (!arrKeywords.includes(val.keyword)) {
//     //             arrKeywords.push(val.keyword);
//     //         }
//     //     });
    
//     //     arrKeywords.forEach((val) => {
//     //         $('#cataloge').append(`<option value="${val}"> ${val} </option>`);
    
//     //     });
//     // }
    
// //    Zoo.prototype.render=function(){
// //     let $callAnimal = $('.photo-template').html();
// //      var rendered= Mustache.render($callAnimal , this);
// //      $('#horns-renderd').append(rendered);
// // }
     
// const readJson = (pages) => {
//     $('#horns-rendered').html('');
//     $.ajax(`data/page-${pages}.json`, { method: 'GET', dataType: 'JSON' }).then(data => {
//         data.forEach(animalItem => {
//             let ZooObj = new Zoo(animalItem);
//             ZooObj.render();
//             renderSelection();
//         });
//         list();
//     });
// };
// readJson(1);

// let mainKeywords = [];

// function list() {
//     // console.log(mainKeywords);
//     mainKeywords = [];
//     $('select').empty();
//     $('select').append($('<option>Filter by Keyword</option>'));
//     // this function can be a prototype as well. (instead of val, pass this)
//     Zoo.all.forEach(val => {
//             if (!mainKeywords.includes(val.keyword)) {
//                 mainKeywords.push(val.keyword)
//                 let $newOption = $('<option></option>');
//                 $('select').append($newOption);
//                 $($newOption).text(val.keyword);
//                 $($newOption).attr('value', val.keyword);

//             }
//         })
//         // console.log(mainKeywords);
// }

      

//             const renderSelection = () =>
//             $('select').on('change', () => {
//                 let selectValue = $('select').val();
//                 $(' #horns-rendered section').hide();
//                 $(`.${selectValue}`).show();
//             })
//             renderSelection();


//             function pageRender() {
//             $('#button1').on('click', function() {
//                 Zoo.all = [];
//                 readJson(1);
//                 // console.log(option1);

//             })
//             $('#button2').on('click', function() {
//                 Zoo.all = [];
//                 readJson(2);
//                 // console.log(option2);

//             })
//             }
//             pageRender();

//             function sortBy(array, property) {
//             array.sort((a, b) => {
//                 let firstItem = a[property];
//                 let secondItem = b[property];
//                 if (property === 'title') {
//                     firstItem = firstItem.toUpperCase();
//                     secondItem = secondItem.toUpperCase();
//                 }

//                 if (firstItem > secondItem) {
//                     return 1;

//                 } else if (firstItem < secondItem) {
//                     return -1;
//                 } else { return 0; }


//             })

//             }

//             $("#radio1").on('click', () => {
//             sortBy(Zoo.all, 'title');
//             $('#horns-rendered').html('');
//             Zoo.all.forEach(image => image.render());

//             })


//             $("#radio2").on('click', () => {
//             sortBy(Zoo.all, 'horns')
//             $('#horns-rendered').html('');
//             Zoo.all.forEach(image => image.render());
//             })

//             // renderSelection();


//             });


    



'use strict';
$(document).ready(function() {
    function Zoo(zooObj) {
        this.title = zooObj.title;
        this.image_url = zooObj.image_url;
        this.description = zooObj.description;
        this.keyword = zooObj.keyword;
        this.horns = zooObj.horns;
        Zoo.all.push(this);
    }
    Zoo.all = []
    Zoo.prototype.render = function() {
        let $callAnimal = $('#photo-template').html();
        var rendered = Mustache.render($callAnimal, this);
        $('#horns-rendered').append(rendered);
    };
    const readJson = (pages) => {
        $('#horns-rendered').html('');
        $.ajax(`data/page-${pages}.json`, { method: 'GET', dataType: 'JSON' }).then(data => {
            data.forEach(animal => {
                let zooObj = new Zoo(animal);
                zooObj.render();
                renderSelection();
            });
            list();
        });
    };
    readJson(1);


    let mainKeywords = [];


    function list() {
        mainKeywords = [];
        $('select').empty();
        $('select').append($('<option>Filter by Keyword</option>'));
        Zoo.all.forEach(val => {
                if (!mainKeywords.includes(val.keyword)) {
                    mainKeywords.push(val.keyword)
                    let $newOption = $('<option></option>');
                    $('select').append($newOption);
                    $($newOption).text(val.keyword);
                    $($newOption).attr('value', val.keyword);

                }
            })
    }

    const renderSelection = () =>
        $('select').on('change', () => {
            let selectValue = $('select').val();
            $(' #horns-rendered section').hide();
            $(`.${selectValue}`).show();
        })
    renderSelection();


    function pageRender() {
        $('#button1').on('click', function() {
            Zoo.all = [];
            readJson(1);

        })
        $('#button2').on('click', function() {
            Zoo.all = [];
            readJson(2);
            // console.log(option2);

        })
    }
    pageRender();

    function sortBy(array, property) {
        array.sort((a, b) => {
            let firstItem = a[property];
            let secondItem = b[property];
            if (property === 'title') {
                firstItem = firstItem.toUpperCase();
                secondItem = secondItem.toUpperCase();
            }

            if (firstItem > secondItem) {
                return 1;

            } else if (firstItem < secondItem) {
                return -1;
            } else { return 0; }


        })

    }

    $("#radio1").on('click', () => {
        sortBy(Zoo.all, 'title');
        $('#horns-rendered').html('');
        Zoo.all.forEach(image => image.render());

    })


    $("#radio2").on('click', () => {
        sortBy(Zoo.all, 'horns')
        $('#horns-rendered').html('');
        Zoo.all.forEach(image => image.render());
    })



});