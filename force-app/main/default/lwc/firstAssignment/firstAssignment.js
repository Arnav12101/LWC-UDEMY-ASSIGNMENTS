import {  LightningElement } from 'lwc';

export default class FirstAssignment extends LightningElement {
    myName = 'arnav';
    myFavoriteLanguage = 'java'

    showVal = false
    username
    pswrd

    onChangeHandlerusername(event)
    {
        this.username = event.target.value;
    }

    onChangeHandlerPass(event)
    {
        this.pswrd = event.target.value;
    }

    showHandler()
    {
        this.showVal = true
        console.log('button clicked')
    }
}