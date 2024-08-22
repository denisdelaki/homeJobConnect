import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/containers/home/home.component').then( m => m.HomeComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./components/presenters/auth/auth.component').then( m => m.AuthComponent)
    }, 
    {
        path: 'jobs',
        loadComponent: () => import('./components/presenters/jobs/jobs.component').then( m => m.JobsComponent)
    },
    {
        path: 'jobs/:id',
        loadComponent: () => import('./components/presenters/jobs/job-details/job-details.component').then( m => m.JobDetailsComponent)
    }, 
    {
        path: 'jobs/:id/apply',
        loadComponent: () => import('./components/presenters/jobs/job-apply/job-apply.component').then( m => m.JobApplyComponent)
    }, 
    {
        path: 'resumes', 
        loadComponent: () => import('./components/presenters/resumes/resumes.component').then( m => m.ResumesComponent)
    }, 
    {
        path: 'resume/:id',
        loadComponent: () => import('./components/presenters/resumes/resume-details/resume-details.component').then( m => m.ResumeDetailsComponent)
    }, 
    {
        path: 'profile',
        loadComponent: () => import('./components/presenters/profile/profile.component').then( m => m.ProfileComponent)
    },
    {
        path: 'profile/:id',
        loadComponent: () => import('./components/presenters/profile/profile.component').then( m => m.ProfileComponent)
    },
    {
        path: 'profile/:id/edit',
        loadComponent: () => import('./components/presenters/profile/profile.component').then( m => m.ProfileComponent)
    },
    {
        path: 'employers',
        loadComponent: () => import('./components/presenters/employers/employers.component').then( m => m.EmployersComponent)
    }, 
    {
        path: 'employers/:id',
        loadComponent: () => import('./components/presenters/employers/employer-details/employer-details.component').then( m => m.EmployerDetailsComponent)
    }
];
