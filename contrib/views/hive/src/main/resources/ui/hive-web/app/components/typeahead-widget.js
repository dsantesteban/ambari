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

import Typeahead from 'ember-cli-selectize/components/ember-selectize';
import Ember from 'ember';

export default Typeahead.extend(Ember.I18n.TranslateableProperties, {
  didInsertElement: function() {
    this._super();

    if(!this.get('selection') && this.get('content.firstObject')) {
      this.set('selection', this.get('content.firstObject'));
    }

    this.selectize.on('dropdown_close', Ember.$.proxy(this.onClose, this));
  },

  onClose: function() {
    if(!this.get('selection') && this.get('prevSelection')) {
      this.set('selection', this.get('prevSelection'));
    }
  },

  _onItemAdd: function(value) {
    this._super(value);

    this.set('prevSelection', this.get('selection'));
  }
});
