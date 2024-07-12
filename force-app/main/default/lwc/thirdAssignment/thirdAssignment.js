import { LightningElement, track } from 'lwc';

export default class ThirdAssignment extends LightningElement {
    @track firstnum = 0
    @track secondnum =0 
    @track sum = 0

    
    showval = false
    showImage = false


    checkNum
    ans = ''

    takenumone(event)
    {
        this.firstnum = event.target.value 
    }
    takenumtwo(event)
    {
        this.secondnum = event.target.value
    }
    clickHandler()
    {
        this.showval = true
        this.sum = Number(this.firstnum) + Number(this.secondnum)
    }

    showHideImg()
    {
        this.showImage = true;
    }

    hideImg()
    {
        this.showImage = false;
    }

    takeNumber(event)
    {
        this.checkNum = event.target.value

    }

    showAns()
    {
        if(Number(this.checkNum) >= 0)
            {
                this.ans = 'Positive'
            }
            else{
                this.ans = 'Negative'
            }

            console.log(this.ans);
    }


    showName = false
    usersName = ''
    takeName(event)
    {
        this.usersName = event.target.value
    }
    greetHandler()
    {
       this.showName = true
    }


    tempInCel
    tempInFar
    showtemp = false;
    takeTemp(event)
    {
        this.tempInCel = event.target.value;
        this.tempInFar = (this.tempInCel * 9/5) + 32
    }
    showtempresult()
    {
        this.showtemp = true
    }
}