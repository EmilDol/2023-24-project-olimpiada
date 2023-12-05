import { EngineOilModel } from "./engine-oil.model";
import { InshurenceModel } from "./inshurence.model";
import { TransmissionOilModel } from "./transmission-oil.model";
import { VignetteModel } from "./vignette.model";

export class CarModel 
{
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
  public transmissionOilReminder?: TransmissionOilModel;
  public vignette?: VignetteModel;
  public inshurence?: InshurenceModel;
}
