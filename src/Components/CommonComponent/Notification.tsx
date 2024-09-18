import classes from './Notification.module.css';

export const Notification = (props: any) => {
    let specialClasses = '';

    if (props.status === 'error') {
        specialClasses = classes.error;
    }

    const cssClasses = `${classes.notification} ${specialClasses}`;

    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
        </section>
    );
};