import { ShareClass } from "./share-class";

export class GroupCalculation {
    name: string = "";
    active:boolean = false;
    disabled:boolean = false;
    removable:boolean = false;
    customClass:string = "";
    preMoneyEvaluation: number = 0;
    targetRoundSize: number = 0;
    isPostEvaluation: boolean = false;
    isRemovable: boolean= false;
    isEditingHeading: boolean= false;
    sharedClass : ShareClass = new ShareClass();
    expectedClosingDate: Date = new Date();
}
