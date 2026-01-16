

export interface ProtocolParameter {
    name: string;
    type: 'string' | 'number' | 'boolean' | 'url' | 'enum';
    required: boolean;
    description: string;
    example?: string;

    values?: string[];

    default?: string | number | boolean;
}

export interface ProtocolCommand {

    command: string;

    description: string;

    parameters: ProtocolParameter[];

    example: string;

    notes?: string;
}

export interface Protocol {

    scheme: string;

    name: string;

    description: string;

    platforms: ('windows' | 'macos' | 'linux' | 'ios' | 'android')[];

    syntax: string;
    commands: ProtocolCommand[];

    metadata?: {

        lastVerified?: string;

        contributors?: string[];
    };
}
