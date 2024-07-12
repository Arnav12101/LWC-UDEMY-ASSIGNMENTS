import { LightningElement } from 'lwc';

export default class FourthComponent extends LightningElement {

    message  = '' 
    namesarray = []

    constructor()
    {
        super();
        this.message = 'Hello from constructor'
        this.namesarray = ['arnav', 'kashish', 'chintu']
    }

    imgURL = 'https://cdn.catboys.com/images/image_306.jpg'
    connectedCallback()
    {
        console.log('This is connected callback');

        fetch('https://api.catboys.com/img')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            this.imgUrl = data.url;
        })
        .catch((err)=>{
            console.log(err);
        });
    }
}