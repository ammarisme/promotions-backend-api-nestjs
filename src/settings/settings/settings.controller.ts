import { Controller, Get } from '@nestjs/common';

@Controller('settings')
export class SettingsController {
    @Get()
    get():any{
        return {
                "expired" : 0,
            };
    }
}
