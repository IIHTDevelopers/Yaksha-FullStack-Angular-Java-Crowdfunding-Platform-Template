import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrowdfundingService } from '../../services/crowdfunding.service';
import { Investment } from 'src/app/models/investment.model';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-crowdfunding',
  templateUrl: './crowdfunding.component.html',
  styleUrls: ['./crowdfunding.component.css']
})
export class CrowdfundingComponent implements OnInit {
  projects: Project[] = [];
  projectForm: FormGroup;
  investmentForm: FormGroup;
  projectInvestments: { [key: string]: Investment[] } = {};
  searchedInvestments: Investment[] = [];
  searchInvestorName: string = '';

  constructor(private crowdfundingService: CrowdfundingService, private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      // name: ['', Validators.required],
      // description: ['', Validators.required],
      // goalAmount: [null, Validators.required],
      // amountRaised: [null, Validators.required]
    });

    this.investmentForm = this.fb.group({
      // amount: ['', Validators.required],
      // investorName: ['', Validators.required],
      // projectId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // write your logic here
  }

  loadProjects(): void {
    // write your logic here
  }

  onSubmit(): void {
    // write your logic here
  }

  loadInvestmentsForProject(projectId: any): void {
    // write your logic here
  }

  submitInvestment(): void {
    // write your logic here
  }

  searchInvestmentsByInvestorName(): void {
    // write your logic here
  }
}
