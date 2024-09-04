export interface SignInResponseDto {
    success: boolean;
    message?: string;
    exception?: string;
    data?: DataResponseDto;
    statusCode: number;
}

interface DataResponseDto {
    token: string;
}