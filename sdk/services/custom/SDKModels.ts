/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Note } from '../../models/Note';
import { Owner } from '../../models/Owner';
import { Car } from '../../models/Car';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Note: Note,
    Owner: Owner,
    Car: Car,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
