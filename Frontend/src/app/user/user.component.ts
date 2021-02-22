import {Component, OnInit} from '@angular/core';
import {AppService} from "./../app.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    allUsers: any
    title: any
    onUserList: boolean
    pageNumber: number = 1
    totalRecords:any
    currentTotalRecords:any = 0
    paginationDefault:boolean = false
    constructor(private AppService: AppService) {
    }

    ngOnInit() {
        this.getAllUsers(1)
    }
    getAllUsers(pageNumber) {
        this.pageNumber = pageNumber;
        this.onUserList = true;
        this.paginationDefault = false;
        this.title = 'Users List';
        this.AppService.getUsers(this.pageNumber).subscribe(result => {
            this.totalRecords = result['total'][0]['total'];
            this.allUsers = result['res'];
            this.currentTotalRecords = parseInt(this.currentTotalRecords) + parseInt(result['res'].length);
        })
    }
    viewfriends(userId) {
        this.onUserList = false;
        this.paginationDefault = true;
        this.AppService.getUserFriends(userId).subscribe(result => {
            this.title = result[0].first_name + ' ' + result[0].last_name + '\'s Friend List';
            this.allUsers = result
            this.allUsers.shift()
        })
    }
}
