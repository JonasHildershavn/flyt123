export interface SanityProjectTag {
    tag: string
    category: 'development' | 'design' | 'content' | 'administration' | 'other' 
}

export const CategoryText: { [key: string]: string }  = {
    'development': 'Utvikling',
    'design': 'Design',
    'content': 'Innhold',
    'administration': 'Ledelse',
    'other': 'Annet'
}