#!/usr/bin/env node

/**
 * Fix for @stencil/angular-output-target@1.2.0 bug
 *
 * The generated components.ts has mismatched output names:
 * - outputs: ['six-alert-show', ...] (kebab-case only)
 * - @Output() sixAlertShow = new EventEmitter<...>() (camelCase)
 *
 * Angular requires the format 'propertyName:publicName' when they differ.
 * This script transforms the outputs arrays to use the correct format:
 * outputs: ['sixAlertShow:six-alert-show', ...]
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const COMPONENTS_FILE = join(__dirname, '../src/lib/stencil-generated/components.ts');

/**
 * Convert kebab-case to camelCase
 * @param {string} str - kebab-case string
 * @returns {string} camelCase string
 */
function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Transform a single output entry from 'kebab-case' to 'camelCase:kebab-case'
 * @param {string} output - The output name in kebab-case
 * @returns {string} The transformed output in 'camelCase:kebab-case' format
 */
function transformOutput(output) {
  const camelCase = kebabToCamel(output);
  return `${camelCase}:${output}`;
}

/**
 * Transform all outputs arrays in the file content
 * @param {string} content - The file content
 * @returns {string} The transformed content
 */
function transformOutputsArrays(content) {
  // Match outputs: ['...', '...', ...] patterns
  // This regex captures the entire outputs array declaration
  return content.replace(/outputs:\s*\[([^\]]+)\]/g, (match, arrayContent) => {
    // Parse the individual output strings
    const outputs = arrayContent.match(/'[^']+'/g);
    if (!outputs) {
      return match; // No outputs found, return unchanged
    }

    const transformedOutputs = outputs.map((output) => {
      // Remove quotes and transform
      const outputName = output.slice(1, -1);
      // Only transform if it's kebab-case (contains hyphens) and not already in correct format
      if (outputName.includes('-') && !outputName.includes(':')) {
        return `'${transformOutput(outputName)}'`;
      }
      return output;
    });

    return `outputs: [${transformedOutputs.join(', ')}]`;
  });
}

function main() {
  console.log('Fixing Angular outputs in components.ts...');

  let content;
  try {
    content = readFileSync(COMPONENTS_FILE, 'utf-8');
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    process.exit(1);
  }

  const transformedContent = transformOutputsArrays(content);

  // Check if any changes were made
  if (content === transformedContent) {
    console.log('No changes needed - outputs are already in correct format.');
    return;
  }

  try {
    writeFileSync(COMPONENTS_FILE, transformedContent, 'utf-8');
    console.log('Successfully fixed Angular outputs.');
  } catch (error) {
    console.error(`Error writing file: ${error.message}`);
    process.exit(1);
  }
}

main();
