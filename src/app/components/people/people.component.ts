import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../shared/services/people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, Observable } from 'rxjs';
import { PeopleApiResponse } from '../../shared/models/people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peopleApiResponse$?: Observable<PeopleApiResponse>
  page = 1;
  loading = false;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const page = params['page'];

      if(page) {
        this.page = Number(page);
        this.refreshPeople(this.page)
      } else {
        this.setQueryParams();
      }
    });
  }

  refreshPeople(page: number): void {
    this.loading = true;
    this.peopleApiResponse$ = this.peopleService.getPeople(page).pipe(
      finalize(() => this.loading = false)
    );
  }

  setQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.page
      }
    })
  }
}
