import React,{Component} from "react";
import classNames from "classNames"

export default class Mask extends Component {
		static propTypes = {
        transparent: React.PropTypes.bool,
        show: React.PropTypes.bool,
				conceal: React.PropTypes.func
    };

    static defaultProps = {
        transparent: false,
        show: false,
				conceal: null
    };

		hidden = () => {
        const {conceal} = this.props;
				if(conceal){
					conceal()
				}
		}

    render () {
        const {transparent ,show, ...others} = this.props;
        const className = classNames({
            'f-mask': show,
            'f-mask-bkg': show && !transparent
        });

        return (
            <div
							className={className}
							onClick={this.hidden}
							{...others}
						>
						</div>
        );
    }
}