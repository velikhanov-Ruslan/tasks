import React, { FC, useState } from 'react'
import { ListItemSecondaryAction, ListItemText, Switch, Typography } from '@mui/material'

type ITodo = {
	title: string,
	subtitle: string,
	completed: boolean
}

const TodoItem: FC<ITodo> = ({
	title,
	subtitle,
	completed
}) => {

	const [isCompletedTask, setIsCompletedTask] = useState(completed);

	return (
		<>
			<ListItemText style={{ textAlign: "start", paddingLeft: "30px" }}>
				<Typography style={isCompletedTask ? { textDecoration: "line-through" } : {}} variant="h6" component={"h6"} color="white">
					{title && title}
				</Typography>
				<Typography variant="body2" component={"h6"} color="white">
					{subtitle && subtitle}
				</Typography>
			</ListItemText>
			<ListItemSecondaryAction>
				<Switch onClick={() => setIsCompletedTask(prev => !prev)} defaultChecked={completed} size="medium" />
			</ListItemSecondaryAction>
		</>
	)
}

export default TodoItem