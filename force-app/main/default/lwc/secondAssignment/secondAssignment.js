import { LightningElement } from 'lwc';

export default class SecondAssignment extends LightningElement {
    city_name = 'SFO'
    temprature = '68F'
    weather = 'Sunny'

    fullName = 'Arnav'
    job_title = 'Software Engineer'


    books = [
        {
            id: 1,
            title: 'Harry Potter and the Philosopher\'s Stone',
            author: 'J.K. Rowling'
        },
        {
            id: 2,
            title: 'Harry Potter and the Chamber of Secrets',
            author: 'J.K. Rowling',
        }
    ]
}