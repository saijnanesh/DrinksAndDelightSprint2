export class OrderDetailsDTO {
	orderId:number;
	name:string;
	distributorId:string;
	quantityValue:number;
	quantityUnit:number;
	pricePerUnit:number;
	totalPrice:number;
	location:Location;
	dateOfOrder:Date;
	dateOfDelivery:Date;
	deliveryStatus:string;
    }
