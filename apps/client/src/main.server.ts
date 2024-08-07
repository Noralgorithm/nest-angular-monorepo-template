import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/core/app.component'
import { config } from './app/core/app.config.server'

const bootstrap = () => bootstrapApplication(AppComponent, config)

export default bootstrap
