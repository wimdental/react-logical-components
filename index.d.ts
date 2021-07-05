
declare module "react-logical-components"{
    declare namespace ReactLogicalComponents {
        declare interface IfProps{
            value: boolean;
        }
        declare class ShowIf extends React.Component<IfProps>{};
        declare class HideIf extends React.Component<IfProps>{};
        declare interface IForeachProps{
            itens: Array<any> | Object;
        }
        declare class EmptyCollection extends React.Component<any>{};
        declare class Each extends React.Component<IForeachProps>{};
        declare interface ISwitchCaseProps{
            value: any;
        }
        declare interface ISwitchProps{
            value: any;
        }
        declare class SwitchCase extends React.Component<ISwitchCaseProps>{};
        declare class SwitchDefault extends React.Component<any>{};
        declare class Switch extends React.Component<ISwitchProps> {};
        declare interface IGlobalRegisterOptions{
            each: boolean;
            emptyCollection: boolean;
            hideIF: boolean;
            showIF: boolean;
            switch: boolean;
            switchCase: boolean;
            switchDefault: boolean;
        }
        declare function globalRegister(options: IGlobalRegisterOptions = {
            each: true,
            emptyCollection: true,
            hideIF: true,
            showIF: true,
            switch: true,
            switchCase: true,
            switchDefault: true
        });
    }
    export = ReactLogicalComponents
}