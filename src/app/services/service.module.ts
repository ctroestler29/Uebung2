import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SongRepositoryService} from './song-repository.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { 

    public static forRoot(): ModuleWithProviders<ServiceModule>{
      return{
        ngModule: ServiceModule,
        providers:[
          SongRepositoryService
        ]
      }
    }

    constructor(@Optional() @SkipSelf() parentModule: ServiceModule)
    {
        if(parentModule)
        {
          throw new Error('ServiceModules is already loaded.')
        }
    }

}
