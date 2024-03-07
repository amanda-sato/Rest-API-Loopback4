import {Entity, model, property} from '@loopback/repository';

@model()
export class Vehicle extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  plate: string;

  @property({
    type: 'string',
    required: true,
  })
  brand: string;

  @property({
    type: 'string',
  })
  model?: string;

  @property({
    type: 'string',
  })
  color?: string;

  @property({
    type: 'number',
  })
  year?: number;

  @property({
    type: 'boolean',
  })
  active?: boolean;


  constructor(data?: Partial<Vehicle>) {
    super(data);
  }
}

export interface VehicleRelations {
  // describe navigational properties here
}

export type VehicleWithRelations = Vehicle & VehicleRelations;
