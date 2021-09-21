declare module "*.pdf";
interface Action {
    type: number
    payload?: string
}

interface IState {
    loading: boolean
    data: string
    errors: string
}

interface IMessage {
    Destination: string,
    Subject: string,
    Body: string,
    EmailAddress: string,
    NameObject: string
}