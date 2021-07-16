import {useEffect} from "react";

function useOnClickOutside(ref, handler) {
	useEffect(
		() => {
			const listener = event => {
				// Do nothing if clicking ref's element or descendent elements
				if (!ref.current || ref.current.contains(event.target)) {
					return;
				}

				handler(event);
			};

			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);

			return () => {
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
			};
		},

		[ref, handler]
	);
}

export default useOnClickOutside


// example:
// In needed component:
// 	const ref = useRef();
//   let [isOpen, setIsOpen] = useState(false)
//   useOnClickOutside(ref, () => setIsOpen(false));
//   return <div>
// 		{isOpen ? (
// 			<div onClick={() => setIsOpen(false)}  ref={ref}>
// 				👋 Hey, I'm a modal. Click anywhere outside of me to close.
// 			</div>
// 		) : (
// 			<button onClick={() => setIsOpen(true)}>Open Modal</button>
// 		)}
// 	</div>