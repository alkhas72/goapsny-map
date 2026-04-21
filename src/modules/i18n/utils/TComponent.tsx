import React from 'react';
import { t } from './tFunction';

export function T({ _str, ...props }: { _str: string; [key: string]: any }) {
  return <>{t(_str, props)}</>;
}
