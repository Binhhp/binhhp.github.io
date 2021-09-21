export default function responseStatus(code: number, message: string, data: any, errors: string) {
    return {
        code: code,
        message: message,
        errors: errors,
        data: data
    }
}