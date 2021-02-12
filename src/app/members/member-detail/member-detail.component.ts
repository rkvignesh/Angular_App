import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/_models/Members';
import { Photo } from 'src/app/_models/Photo';
import { MembersService } from 'src/app/_services/members.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  member: Member;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, private memberService: MembersService) { }

  ngOnInit(): void {

    this.loadMember();

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
  }

  getImages(): NgxGalleryImage[]{
    const imgUrl = [];
    for(const photo of this.member.photos){
      imgUrl.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      })
    }
    return imgUrl;
  }

  loadMember(){
      this.memberService.getMember(this.route.snapshot.paramMap.get('userName')).subscribe(member => {
        this.member=member;
        this.galleryImages=this.getImages();
      })
  }

}
