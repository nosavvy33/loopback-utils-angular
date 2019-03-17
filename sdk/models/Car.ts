/* tslint:disable */
import {
  Owner
} from '../index';

declare var Object: any;
export interface CarInterface {
  "brand": string;
  "color"?: string;
  "state": string;
  "id"?: number;
  "ownerId"?: number;
  owner?: Owner;
}

export class Car implements CarInterface {
  "brand": string;
  "color": string;
  "state": string;
  "id": number;
  "ownerId": number;
  owner: Owner;
  constructor(data?: CarInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Car`.
   */
  public static getModelName() {
    return "Car";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Car for dynamic purposes.
  **/
  public static factory(data: CarInterface): Car{
    return new Car(data);
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
      name: 'Car',
      plural: 'Cars',
      path: 'Cars',
      idName: 'id',
      properties: {
        "brand": {
          name: 'brand',
          type: 'string'
        },
        "color": {
          name: 'color',
          type: 'string'
        },
        "state": {
          name: 'state',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "ownerId": {
          name: 'ownerId',
          type: 'number'
        },
      },
      relations: {
        owner: {
          name: 'owner',
          type: 'Owner',
          model: 'Owner',
          relationType: 'belongsTo',
                  keyFrom: 'ownerId',
          keyTo: 'id'
        },
      }
    }
  }
}
