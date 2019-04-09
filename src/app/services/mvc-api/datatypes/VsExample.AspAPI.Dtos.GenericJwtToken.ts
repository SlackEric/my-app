/** 
 * Auto Generated Code
 * Please do not modify this file manually 
 * Assembly Name: "VsExample.AspAPI"
 * Source Type: "C:\Users\Eric\Documents\GitHub\VisualStudioExamples\VsExample.AspAPI\bin\Debug\netcoreapp2.2\VsExample.AspAPI.dll"
 * Generated At: 2019-04-02 21:13:24.717
 */
import { RoleEnum } from '../enums/VsExample.AspAPI.Dtos.RoleEnum';
export interface GenericJwtToken {
	Id?: string;
	Roles?: RoleEnum[];
	Name?: string;
	Token?: string;
	Valid?: boolean;
	ExpiringDate?: string;
}
