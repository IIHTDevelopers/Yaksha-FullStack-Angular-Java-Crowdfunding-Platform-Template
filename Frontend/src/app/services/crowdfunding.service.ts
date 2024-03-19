import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Investment } from '../models/investment.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class CrowdfundingService {
  public apiUrl = '';

  constructor(private http: HttpClient) { }

  getAllProjects(): any {
    // write your logic here
    return null;
  }

  getProjectById(projectId: string): any {
    // write your logic here
    return null;
  }

  createProject(projectData: Project): any {
    // write your logic here
    return null;
  }

  updateProject(projectId: string, projectData: Project): any {
    // write your logic here
    return null;
  }

  deleteProject(projectId: string): any {
    // write your logic here
    return null;
  }

  getAllInvestmentsForProject(projectId: string): any {
    // write your logic here
    return null;
  }

  getInvestmentById(investmentId: string): any {
    // write your logic here
    return null;
  }

  createInvestment(investmentData: Investment): any {
    // write your logic here
    return null;
  }

  updateInvestment(investmentId: string, investmentData: Investment): any {
    // write your logic here
    return null;
  }

  deleteInvestment(investmentId: string): any {
    // write your logic here
    return null;
  }

  getInvestmentsByProjectId(projectId: string): any {
    // write your logic here
    return null;
  }

  getInvestmentsByInvestorName(investorName: string): any {
    // write your logic here
    return null;
  }
}
