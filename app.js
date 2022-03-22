import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";


// get elements



const staff_add_form = document.getElementById('staff_add_form');
const staff_data_list = document.getElementById('staff_data_list');


staff_add_form.addEventListener('submit', function(e){
    e.preventDefault();

     const msg = document.querySelector('.msg');

     

     
    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());



    let { photo, name, cell, location, } = data;

    if( name == '' || cell == '' || location == '' ){

        msg.innerHTML = Alert.danger('All fields are requried');

    }else{

        Storage.set('staffs', data);

        staff_add_form.reset();
        getAllStaff();

        
        
    }


    

});


getAllStaff();
    function getAllStaff(){

        let data = Storage.get('staffs');

        let list = '';

        data.map((data , index) => {

            let {name, cell, location, photo } = data;

            list    += `

                <tr>
                    <td>${ index + 1 }</td>
                    <td>${ name }</td>
                    <td>${ cell }</td>
                    <td>${ location }</td>
                 <td><img style=" width:50px; height:50px; object-fit:cover;" src="${ photo ? photo : 'img/img_avatar.png'}"></td>
                    <td>
                      <button class="btn btn-info btn-sm"><i class="fas fa-eye"></i></button>
                      <button class="btn btn-info btn-sm"><i class="fas fa-edit"></i></button>
                      <button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>
                    </td>
                </tr>

            `;

        });

        staff_data_list.innerHTML = list;


        

    }


    

    


    