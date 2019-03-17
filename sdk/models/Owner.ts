/* tslint:disable */
import {
  Car
} from '../index';

declare var Object: any;
export interface OwnerInterface {
  "name": string;
  "surname": string;
  "id"?: number;
  cars?: Car[];
}

export class Owner implements OwnerInterface {
  "name": string;
  "surname": string;
  "id": number;
  cars: Car[];
  constructor(data?: OwnerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Owner`.
   */
  public static getModelName() {
    return "Owner";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Owner for dynamic purposes.
  **/
  public static factory(data: OwnerInterface): Owner{
    return new Owner(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Owner',
      plural: 'Owners',
      path: 'Owners',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "surname": {
          name: 'surname',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        cars: {
          name: 'cars',
          type: 'Car[]',
          model: 'Car',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'ownerId'
        },
      }
    }
  }
}
