import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { project } from '../../../../interfaces/project.interface';

@Component({
  selector: 'app-project-render',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './ProjectRender.component.html',
  styleUrl: './ProjectRender.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectRenderComponent implements OnInit  {

  public projectData = [
    {
      name: 'mobile_scanning_app',
      description: 'mobile_scanning_app_description',
      images: ['assets/images/ScanningApp.webp'],
    },
    {
      name: 'logistics_Platform',
      description: 'logistics_Platform_description',
      images: ['assets/images/logisticsPlatform.webp'],
    },
    {
      name: 'printing_tool',
      description: 'printing_tool_description',
      images: ['/assets/images/printingTool.webp'],
    },
    {
      name: 'inventory_management_app',
      description: 'inventory_management_app_description',
      images: ['/assets/images/inventoryManagement.webp'],
    },
    {
      name: 'epic_portfolio',
      description: 'epic_portfolio_description',
      images: ['/assets/images/EpicPortfolio1.webp'],
    },
    {
      name: 'menthal_app',
      description: 'menthal_app_description',
      images: ['/assets/images/menthalApp.webp'],
    },
    {
      name: 'volunteer_app',
      description: 'volunteer_app_description',
      images: ['/assets/images/volunteerApp.webp'],
    },
    {
      name: 'roomie_app',
      description: 'roomie_app_description',
      images: ['/assets/images/roomieApp.webp'],
    },
  ];

  public project = signal<project | null>(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to changes in the route parameters
    this.route.paramMap.subscribe(paramMap => {
      const projectName = paramMap.get('id');  // Assuming 'id' is the parameter key
      console.log('Route Parameter:', projectName);

      if (projectName) {
        const foundProject = this.projectData.find(p => p.name === projectName);
        console.log('Found Project:', foundProject);
        this.project.set(foundProject ?? null);
      } else {
        console.log('No project name found in route.');
        this.project.set(null);
      }
    });
  }

  goBack(): void {
    window.history.back();
  }
}
