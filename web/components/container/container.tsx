import cn from 'classnames'

interface ContainerProps {
    children?: React.ReactNode;
    className: string
    theme:| "article" | "wide" 
}

const Container: React.FC<ContainerProps> = ({ className, children, theme }) => (
    <div className={cn('container', className, theme && `container--${theme}`)}>
        {children}
    </div>
)

export default Container
