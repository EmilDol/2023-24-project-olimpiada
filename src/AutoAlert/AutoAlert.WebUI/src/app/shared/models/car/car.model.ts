import { EngineOilModel } from "./engine-oil.model";
import { InsurenceModel } from "./insurence.model";
import { TransmitionOilModel } from "./transmition-oil.model";
import { VignetteModel } from "./vignette.model";

export class CarModel 
{ 
  [key: string]: any;

  public plateNumber?: string;
  public model?: string;
  public make?: string;
  public yearOfMake?: number;
  public mileage?: number;
  public horsePower?: number;
  public euroType?: number;
  public taxPayed?: boolean;
  public technicalCheckExpirationDate?: Date;
  public regionId?: string;
  public engineOilReminder?: EngineOilModel;
  public transmitionOilReminder?: TransmitionOilModel;
  public vignette?: VignetteModel;
  public insurence?: InsurenceModel;
}
