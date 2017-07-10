/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Injectable} from '@angular/core';
import * as moment from 'moment-timezone';

@Injectable()
export class UtilsService {

  valueHasChanged(currentValue: any, newValue: any): boolean {
    if (newValue == null) {
      return false;
    }
    if (typeof newValue === 'object') {
      return JSON.stringify(currentValue) !== JSON.stringify(newValue);
    } else {
      return currentValue !== newValue;
    }
  }

  getTimeZoneLabel(timeZone) {
    return `${timeZone} (${moment.tz(timeZone).format('Z')})`;
  }

}
