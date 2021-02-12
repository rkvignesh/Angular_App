import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_models/Members';
import { User } from 'src/app/_models/User';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  user: User;

  member: Member;

  constructor(private accountService: AccountService,
    private memberService: MembersService, private toastr: ToastrService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user=>{
      this.user=user;
    });
   }

  ngOnInit(): void {
    this.getMemberDetails();
  }

  getMemberDetails(){
    this.memberService.getMember(this.user.userName).subscribe(member =>{
      this.member = member;
    })
  }

  updateMemberDetails(){
    this.memberService.updateMember(this.member).subscribe(()=>{
      console.log(this.member);
      this.toastr.success('Updated success');
    })    
  }
  
}
